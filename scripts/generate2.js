// This script generates Go code from the jsonschema
// bundle using handlebars templates. The templates are
// located in the ./templates subdirectory.

// This code is a work-in-progress.
// Please excuse the mess.

import fs from "fs";
import {exec} from "child_process";
import Case from "case";
import Handlebars from "handlebars";
import getType from "./helpers/types.js";

Handlebars.registerHelper("raw-helper", function(options) {
  return options.fn();
});

const generateStruct = (key, template, output, options) => {
  let obj = schema.definitions[key];

  if (template === "struct_or_string" && key !== "StepRun") {
    try{
    obj.properties = schema.definitions[key+"Long"].properties;
    }catch(e) {
      console.log(key, e)
    }
  }

  if (!obj) {
    console.log("canot load object", key)
    return;
  }

  // store the go struct details.
  let struct = {
      name: key,
      desc: obj.description,
      path: output,
      enum:  [],
      props: [],
      types: [],
  }

  // for each property
  Object.entries(obj.properties || {}).forEach(([propkey, propval]) => {
      const json = propkey;
      const name = Case.pascal(propkey);

      // append the field to the go struct
      struct.props.push({
          name: name,
          json: json,
          type: getType(propval, schema.definitions),
      });
  });

  // for each enum value
  obj.enum && obj.enum.forEach(text => {
      struct.enum.push({name: struct.name + Case.pascal(text), text: text});
  });

  // parse the handlebars templates
  const text = fs.readFileSync(`scripts/templates/${template}.handlebars`);
  const tmpl = Handlebars.compile(text.toString(), {noEscape:true});
    
  // execute the template and write the contents
  // to the struct filepath.
  fs.writeFileSync(`yaml/${struct.path}`, tmpl({...struct, options})); 

  console.log(`yaml/${struct.path}`)
}



const template = (name, input, output) => {
  // parse the handlebars templates
  const text = fs.readFileSync(`scripts/templates/${name}.handlebars`);
  const tmpl = Handlebars.compile(text.toString());
    
  // execute the template and write the contents
  // to the struct filepath.
  fs.writeFileSync(`yaml/${output}`, tmpl(input)); 

  console.log(`yaml/${output}`)
}

const generateEnum = (key, tmpl, output) => {
  const obj = schema.definitions[key];

  // store the go struct details.
  let struct = {
    name: key,
    desc: obj.description,
    enum: [],
  }

  // for each enum value
  obj.enum && obj.enum.forEach(text => {
    struct.enum.push({name: struct.name + Case.pascal(text), text: text});
  });

  template(tmpl, struct, output)
}

// parse the schema
let schema = JSON.parse(fs.readFileSync("dist/schema.json"));

// generate code
generateStruct("Action",          "custom_action",     "action.go");
generateEnum("ActionType", "enum", "action_type.go")
generateStruct("ActionManual",    "struct",            "action_manual.go");
generateStruct("ActionRetry",     "struct",            "action_retry.go");
generateStruct("Cache",           "struct",            "cache.go");
generateStruct("Clone",           "struct_or_string",  "clone.go",       { property: "Disabled", type: "bool", inverse: true });
generateStruct("CloneRef",        "struct_or_string",  "clone_ref.go",   { property: "Name", type: "string" });
generateStruct("Concurrency",     "struct_or_string",  "concurrency.go", { property: "Group", type: "string" });
generateStruct("Container",       "struct_or_string",  "container.go",   { property: "Image", type: "string" });
generateStruct("Credentials",     "struct",            "credentials.go");
generateStruct("CredentialsAWS",  "struct",            "credentials_aws.go");
generateStruct("Environment",  "struct",          "environment.go");
generateEnum("EnvironmentType", "enum", "environment_type.go")
generateStruct("EnvironmentRef",     "custom_environment","environment_ref.go");
generateStruct("EnvironmentItem", "struct",            "environment_ref_item.go");
generateStruct("FailureStrategy", "struct",            "failure.go");
generateEnum("FailureType", "enum", "failure_type.go")
generateStruct("Input",           "struct",            "input.go");
generateEnum("MachineSize", "enum", "machine_size.go")
generateEnum("MachineImage", "enum", "machine_image.go")
generateStruct("Mount",           "custom_mount",      "mount.go");
// generateStruct("Schedule",     "custom_on_schedule","on_schedule.go");
generateStruct("On",              "custom_on",          "on.go");
generateStruct("Output",          "struct_or_string",   "output.go", { property: "Name", type: "string" });
template("parse", {}, "parse.go")
template("parse_test", {}, "parse_test.go")
generateStruct("Permissions",        "custom_perms",    "perms.go");
generateStruct("Pipeline",           "struct",          "pipeline.go");
generateStruct("Platform",           "struct",          "platform.go");
generateStruct("Report",             "struct",          "report.go");
generateStruct("Repository",         "struct",          "repository.go");
generateStruct("Runtime",            "struct",          "runtime.go");
generateStruct("RuntimeCloud",       "struct",          "runtime_cloud.go");
generateStruct("RuntimeKubernetes",  "struct",          "runtime_kubernetes.go");
generateStruct("RuntimeInstance",    "struct",          "runtime_vm.go");
generateStruct("Schema",             "struct",          "schema.go");
generateStruct("InfraSchema",        "struct",          "schema_infra.go");
generateStruct("Service",            "struct",          "service.go");
generateStruct("ServiceRef",         "struct_or_string",  "service_ref.go",   { property: "Items", type: "Stringorslice" });
generateStruct("Stage",              "struct",          "stage.go");
generateStruct("StageApproval",      "struct",          "stage_approval.go");
generateStruct("StageGroup",         "struct",          "stage_group.go");
generateStruct("StageTemplate",      "struct",          "stage_template.go");
generateStruct("Status",             "struct",          "status.go");
generateStruct("StepAction",         "struct",          "step_action.go");
generateStruct("StepApproval",       "struct",          "step_approval.go");
generateStruct("StepBarrier",        "struct",          "step_barrier.go");
generateStruct("StepGroup",          "struct",          "step_group.go");
generateStruct("StepQueue",          "struct",          "step_queue.go");
generateStruct("StepRun",            "struct_or_string",  "step_run.go",   { property: "Script", type: "Stringorslice" });
generateStruct("StepTemplate",       "struct",          "step_template.go");
generateStruct("StepTest",           "struct",          "step_tester.go");
generateStruct("Step",               "custom_step",     "step.go");
generateStruct("For",                "struct",          "strategy_for.go");
generateStruct("Matrix",             "struct",          "strategy_matrix.go");
generateStruct("While",              "struct",          "strategy_while.go");
generateStruct("Strategy",           "struct",          "strategy.go");
generateStruct("Template",           "struct",          "template.go");
generateStruct("TestIntelligence",   "struct",          "test_intelligence.go");
generateStruct("TestSplitting",      "struct",          "test_splitting.go");
template("types", {}, "types.go")
generateStruct("VolumeBind",         "custom_volume",   "volume.go");
generateStruct("VolumeBind",         "struct",          "volume_bind.go");
generateStruct("VolumeClaim",        "struct",          "volume_claim.go");
generateStruct("VolumeConfigMap",    "struct",          "volume_config_map.go");
generateStruct("VolumeTemp",         "struct",          "volume_temp.go");
generateStruct("Workspace",          "struct_or_string","workspace.go",     { property: "Disabled", type: "bool", inverse: true });

// format generated files
exec("gofmt -s -w yaml/*.go", (err) => {
  if (err) {
    console.log("ensure gofmt is installed and in your PATH")
    console.error(err);
    process.exit(1)
  }
});

// import all dependencies if needed
exec("goimports -w yaml/*.go", (err) => {
  if (err) {
    console.log("ensure goimports is installed and in your PATH")
    console.error(err);
    process.exit(1)
  }
});

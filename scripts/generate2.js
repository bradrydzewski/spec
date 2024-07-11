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

const generateStruct = (key, template, output, options) => {
  const obj = schema.definitions["Action"];

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
  const tmpl = Handlebars.compile(text.toString());
    
  // execute the template and write the contents
  // to the struct filepath.
  fs.writeFileSync(`dist/go/${struct.path}`, tmpl(struct)); 

  console.log(`dist/go/${struct.path}`)
}

// parse the schema
let schema = JSON.parse(fs.readFileSync("dist/schema.json"));

// generate code
generateStruct("Action", "string_or_struct", "action.go", { property: error });
generateStruct("Action", "string_or_struct", "action.go", { property: error });
generateStruct("Action", "string_or_struct", "action.go", { property: error });
generateStruct("Action", "string_or_struct", "action.go", { property: error });

// format generated files
exec("gofmt -s -w dist/go/*.go", (err) => {
  if (err) {
    console.log("ensure gofmt is installed and in your PATH")
    console.error(err);
    process.exit(1)
  }
});

// import all dependencies if needed
exec("goimports -w dist/go/*.go", (err) => {
  if (err) {
    console.log("ensure goimports is installed and in your PATH")
    console.error(err);
    process.exit(1)
  }
});

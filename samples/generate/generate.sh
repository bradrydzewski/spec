yaml=$(cat <<EOF

pipeline:
  stages:
  - steps:
    - run: echo hello
    - run: echo world

EOF
)

echo "$EOF" > $HARNESS_GENERATE_PIPELINE
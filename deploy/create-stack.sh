function usage {
  echo """
  This script is to create cloudformation stack. 
  To use, pass the stack name after script name.
  sh create-stack.sh <stack-name>
  ex:
  sh create-stack.sh my-stack
  """
}

STACK_NAME=''

if [ $# -eq 0 ]; then
  usage;
  exit;
else
  STACK_NAME="$1"
fi

aws cloudformation create-stack --stack-name "$STACK_NAME" --template-body file://deploy/template.yaml --parameters file://deploy/parameters.json


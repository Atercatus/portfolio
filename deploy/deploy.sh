function usage {
  echo """
  This script is to upload the react build files. 
  To use, pass the s3 bucket name after script name.
  sh deploy.sh <s3_bucket_name>
  ex:
  sh deploy.sh my-bucket
  """
}

S3_BUCKET=''

if [ $# -eq 0 ]; then
  usage;
  exit;
else
  S3_BUCKET="$1"
fi

aws s3 cp build "s3://$S3_BUCKET" --recursive 

function usage {
  echo """
  This script is to upload the react build files. 
  To use, pass the s3 bucket name after script name.
  sh deploy.sh <s3_bucket_name> <distribution_id>
  ex:
  sh deploy.sh my-bucket AWGADASSAD
  """
}

S3_BUCKET=''
DISTRIBUTION_ID=''

if [ $# -lt 2 ]; then
  usage;
  exit;
else
  S3_BUCKET="$1"
  DISTRIBUTION_ID="$2"
fi

aws s3 cp data "s3://$S3_BUCKET/data" --recursive 
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
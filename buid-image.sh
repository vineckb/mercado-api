# from the dropdown at the top of Cloud Console:
export GCLOUD_PROJECT="staging-403014"
# from Step 2.2 above:
export REPO="supermercadista"
# the region you chose in Step 2.4:
export REGION="southamerica-east1"
# whatever you want to call this image:
export IMAGE="supermercadista-api"

# use the region you chose above here in the URL:
export IMAGE_TAG=${REGION}-docker.pkg.dev/$GCLOUD_PROJECT/$REPO/$IMAGE

# Build the image:
docker build -t $IMAGE_TAG -f ./Dockerfile --platform linux/x86_64 .
# Push it to Artifact Registry:
docker push $IMAGE_TAG

# southamerica-east1-docker.pkg.dev/staging-403014/supermercadista

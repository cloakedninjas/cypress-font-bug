# Good version
docker run -it -v $PWD:/e2e -w /e2e -e CYPRESS_baseUrl=http://host.docker.internal:8080 cypress/included:12.3.0

# Broken version
#docker run -it -v $PWD:/e2e -w /e2e -e CYPRESS_baseUrl=http://host.docker.internal:8080 cypress/included:12.4.0
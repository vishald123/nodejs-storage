/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// sample-metadata
//  title: get-bucket-policy-only
//  description: Gets bucket policy metadata for a bucket in the Cloud Storage
//  usage: node getBucketPolicyOnly.js

function main(bucketName) {
  // [START storage_create_bucket]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function getBucketPolicyOnly() {
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const bucketName = 'Name of a bucket, e.g. my-bucket';

    // Gets Bucket Metadata and checks if BucketPolicyOnly is enabled.
    const [metadata] = await storage.bucket(bucketName).getMetadata();

    if (metadata.iamConfiguration) {
      const bucketPolicyOnly = metadata.iamConfiguration.bucketPolicyOnly;
      console.log(`Bucket Policy Only is enabled for ${bucketName}.`);
      console.log(`Bucket will be locked on ${bucketPolicyOnly.lockedTime}.`);
    } else {
      console.log(`Bucket Policy Only is not enabled for ${bucketName}.`);
    }
    // [END storage_get_bucket_policy_only]
  }
  getBucketPolicyOnly().catch(err => console.log(err));
}
main(...process.argv.slice(2));

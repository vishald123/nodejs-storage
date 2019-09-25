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

// sample-metadata
//  title: delete-bucket
//  description: Deletes a bucket in the Cloud Storage
//  usage: node deleteBucket.js

'use strict';

function main(bucketName) {
  // [START storage_create_bucket]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function deleteBucket() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const bucketName = 'Name of a bucket, e.g. my-bucket';

    // Deletes the bucket
    await storage.bucket(bucketName).delete();

    console.log(`Bucket ${bucketName} deleted.`);
    // [END storage_delete_bucket]
  }
  deleteBucket().catch(err => console.log(err));
}

main(...process.argv.slice(2));

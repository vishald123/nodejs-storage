/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// sample-metadata:
//   title: Set Retention Policies.
//   description: Sets Retention Policies.
//   usage: node setRetentionPolicy.js [bucketName, retentionPeriod]

function main(bucketName, retentionPeriod) {
  // [START storage_set_retention_policy]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  // Set Retention Policies
  async function setRetentionPolicy() {
    const [metadata] = await storage
      .bucket(bucketName)
      .setRetentionPeriod(retentionPeriod);
    console.log(
      `Bucket ${bucketName} retention period set for ${metadata.retentionPolicy.retentionPeriod} seconds.`
    );
    // [END storage_set_retention_policy]
  }
  setRetentionPolicy();
}

main(...process.argv.slice(2));

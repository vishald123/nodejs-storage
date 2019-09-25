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
//   title: Get Retention Policies.
//   description: Gets Retention Policies.
//   usage: node getRetentionPolicy.js [bucketName]

function main(bucketName) {
  // [START storage_get_retention_policy]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  // Get Retention Policies
  async function getRetentionPolicy() {
    const [metadata] = await storage.bucket(bucketName).getMetadata();
    if (metadata.retentionPolicy) {
      const retentionPolicy = metadata.retentionPolicy;
      console.log('A retention policy exists!');
      console.log(`Period: ${retentionPolicy.retentionPeriod}`);
      console.log(`Effective time: ${retentionPolicy.effectiveTime}`);
      if (retentionPolicy.isLocked) {
        console.log('Policy is locked');
      } else {
        console.log('Policy is unlocked');
      }
    }
    // [END storage_get_retention_policy]
  }
  getRetentionPolicy();
}

main(...process.argv.slice(2));

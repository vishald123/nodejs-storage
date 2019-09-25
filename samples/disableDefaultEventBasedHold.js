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
//   title: disable default event based hold.
//   description: disables default event based hold.
//   usage: node disableDefaultEventBasedHold.js [bucketName]

function main(bucketName) {
  // [START storage_disable_default_event_based_hold]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Disables a default event-based hold for the bucket.
  async function disableDefaultEventBasedHold() {
    // Disables a default event-based hold for a bucket.
    await storage.bucket(bucketName).setMetadata({
      defaultEventBasedHold: false,
    });
    console.log(`Default event-based hold was disabled for ${bucketName}.`);
    // [END storage_disable_default_event_based_hold]
  }
  disableDefaultEventBasedHold();
}

main(...process.argv.slice(2));

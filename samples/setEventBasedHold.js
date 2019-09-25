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
//   title: set event based hold.
//   description: Sets event based hold.
//   usage: node setEventBasedHold.js [bucketName, filename]

function main(bucketName, fileName) {
  // [START storage_set_event_based_hold]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';

  // Set event-based hold.
  async function setEventBasedHold() {
    await storage
      .bucket(bucketName)
      .file(fileName)
      .setMetadata({
        eventBasedHold: true,
      });
    console.log(`Event-based hold was set for ${fileName}.`);
    // [END storage_set_event_based_hold]
  }
  setEventBasedHold();
}

main(...process.argv.slice(2));

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
//   title: release temporary hold.
//   description: releases temporary hold.
//   usage: node releaseTemporaryHold.js [bucketName, filename]

function main(bucketName, fileName) {
  // [START storage_release_temporary_hold]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';

  // sets temporary hold.
  async function releaseTemporaryHold() {
    await storage
      .bucket(bucketName)
      .file(fileName)
      .setMetadata({
        temporaryHold: false,
      });
    console.log(`Temporary hold was released for ${fileName}.`);
    // [END storage_release_temporary_hold]
  }
  releaseTemporaryHold();
}

main(...process.argv.slice(2));

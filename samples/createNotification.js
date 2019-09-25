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
//   title: Create a notification.
//   description: Creates a notification.
//   usage: node createNotification.js <BUCKET_NAME> <TOPIC>

function main(bucketName, topic) {
  // [START storage_create_notification]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function createNotification() {
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const bucketName = 'Name of a bucket, e.g. my-bucket';
    // const topic = 'Name of a topic, e.g. my-topic';

    // Creates a notification
    await storage.bucket(bucketName).createNotification(topic);

    console.log('Notification subscription created.');
  }
  // [END storage_create_notification]
  createNotification();
}

main(...process.argv.slice(2));

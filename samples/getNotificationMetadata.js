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
//   title: get Metadata.
//   description: Gets notification metadata.
//   usage: node getMetadata.js <BUCKET_NAME> <NOTIFICATION_ID>

function main(bucketName, notificationId) {
  // [START storage_notifications_get_metadata]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function getMetadata() {
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const bucketName = 'Name of a bucket, e.g. my-bucket';
    // const notificationId = 'ID of notification to get, e.g. 1';

    // Get the notification metadata
    const [metadata] = await storage
      .bucket(bucketName)
      .notification(notificationId)
      .getMetadata();

    console.log(`ID: ${metadata.id}`);
    console.log(`Topic: ${metadata.topic}`);
    console.log(`Event Types: ${metadata.event_types}`);
    console.log(`Custom Attributes: ${metadata.custom_attributes}`);
    console.log(`Payload Format: ${metadata.payload_format}`);
    console.log(`Object Name Prefix: ${metadata.object_name_prefix}`);
    console.log(`Etag: ${metadata.etag}`);
    console.log(`Self Link: ${metadata.selfLink}`);
    console.log(`Kind: ${metadata.kind}`);
  }
  // [END storage_notifications_get_metadata]
  getMetadata();
}

main(...process.argv.slice(2));

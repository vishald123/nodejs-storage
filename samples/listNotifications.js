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
//   title: List notifications.
//   description: Lists notifications.
//   usage: node listNotification.js <BUCKET_NAME>

function main(bucketName) {
  // [START storage_list_notifications]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function listNotifications() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const bucketName = 'Name of a bucket, e.g. my-bucket';

    const [notifications] = await storage.bucket(bucketName).getNotifications();

    console.log('Notifications:');
    notifications.forEach(notification => {
      console.log(notification.id);
    });
  }
  // [END storage_list_notifications]
  listNotifications();
}

main(...process.argv.slice(2));

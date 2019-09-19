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

// remove-bucket-default-owner:
//   title: Storage Remove Default Bucket Owner.
//   description: Removes default bucket owner in Storage.
//   usage: node removeBucketDefaultOwner.js <BUCKET_NAME> <USER_EMAIL>

function main(bucketName, userEmail) {
  // [START storage_remove_bucket_default_owner]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function removeBucketDefaultOwner() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const bucketName = 'Name of a bucket, e.g. my-bucket';
    // const userEmail = 'Email of user to remove, e.g. developer@company.com';

    // Removes the user from the access control list of the bucket. You can use
    // deleteAllUsers(), deleteDomain(), deleteProject(), deleteGroup(), and
    // deleteAllAuthenticatedUsers() to remove access for different types of entities.

    await storage.bucket(bucketName).acl.default.owners.deleteUser(userEmail);

    console.log(`Removed user ${userEmail} from bucket ${bucketName}.`);
    // [END storage_remove_bucket_default_owner]
  }
  removeBucketDefaultOwner().catch(err => console.log(err));
}

main(...process.argv.slice(2));

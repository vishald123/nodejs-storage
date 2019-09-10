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

// remove-file-owner:
//   title: Storage Removes File Owner.
//   description: Removes User as File Owner.
//   usage: node removeFileOwner.js <BUCKET_NAME> <FILE_NAME> <USER_EMAIL>

function main(bucketName, filename, userEmail) {
    // [START storage_remove_file_owner]
    // Imports the Google Cloud client library
    const { Storage } = require('@google-cloud/storage');

    // Creates a client
    const storage = new Storage();

    async function removeFileOwner() {
        /**
         * TODO(developer): Uncomment the following line before running the sample.
         */
        // const bucketName = 'Name of a bucket, e.g. my-bucket';
        // const filename = 'Name of file to access, e.g. file.txt';
        // const userEmail = 'Email of user to remove, e.g. developer@company.com';

        // Removes the user from the access control list of the file. You can use
        // deleteAllUsers(), deleteDomain(), deleteProject(), deleteGroup(), and
        // deleteAllAuthenticatedUsers() to remove access for different types of entities.
        await storage
            .bucket(bucketName)
            .file(filename)
            .acl.owners.deleteUser(userEmail);

        console.log(`Removed user ${userEmail} from file ${filename}.`);
        // [END storage_remove_file_owner]
    }
    removeFileOwner().catch(err => console.log(err));
}

main(...process.argv.slice(2));

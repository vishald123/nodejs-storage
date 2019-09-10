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

// print-file-acl-for-user:
//   title: Storage Print File Acl for User.
//   description: Prints file acl for user.
//   usage: node printFileAclForUser.js <BUCKET_NAME> <FILE_NAME> <USER_EMAIL>

function main(bucketName, filename, userEmail) {
    // [START storage_print_file_acl_for_user]
    // Imports the Google Cloud client library
    const { Storage } = require('@google-cloud/storage');

    // Creates a client
    const storage = new Storage();

    async function printFileAclForUser() {
        /**
         * TODO(developer): Uncomment the following line before running the sample.
         */
        // const bucketName = 'Name of a bucket, e.g. my-bucket';
        // const filename = 'File to access, e.g. file.txt';
        // const userEmail = 'Email of user to check, e.g. developer@company.com';

        const options = {
            // Specify the user
            entity: `user-${userEmail}`,
        };

        // Gets the user's ACL for the file
        const [aclObject] = await storage
            .bucket(bucketName)
            .file(filename)
            .acl.get(options);

        console.log(`${aclObject.role}: ${aclObject.entity}`);
        // [END storage_print_file_acl_for_user]
    }
    printFileAclForUser().catch(err => console.log(err));
}

main(...process.argv.slice(2));

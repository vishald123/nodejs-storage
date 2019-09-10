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

// print-bucket-acl-for-user:
//   title: Storage Print Bucket Acl For User.
//   description: Prints bucket ACL for user in Storage.
//   usage: node printBucketAclForUser.js <BUCKET_NAME> <USER_EMAIL>

function main(bucketName, userEmail) {
    // [START storage_print_bucket_acl_for_user]
    // Imports the Google Cloud client library
    const { Storage } = require('@google-cloud/storage');

    // Creates a client
    const storage = new Storage();

    async function printBucketAclForUser() {
        /**
         * TODO(developer): Uncomment the following line before running the sample.
         */
        // const bucketName = 'Name of a bucket, e.g. my-bucket';
        // const userEmail = 'Email of user to check, e.g. developer@company.com';

        const options = {
            // Specify the user
            entity: `user-${userEmail}`,
        };

        // Gets the user's ACL for the bucket
        const [aclObject] = await storage.bucket(bucketName).acl.get(options);

        console.log(`${aclObject.role}: ${aclObject.entity}`);
        // [END storage_print_bucket_acl_for_user]
    }
    printBucketAclForUser().catch(err => console.log(err));
}

main(...process.argv.slice(2));

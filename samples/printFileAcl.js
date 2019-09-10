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

// print-file-acl:
//   title: Storage Print Acl for File.
//   description: Prints file acl.
//   usage: node printFileAcl.js <BUCKET_NAME> <FILE_NAME>

function main(bucketName, filename) {
    // [START storage_print_file_acl]
    // Imports the Google Cloud client library
    const { Storage } = require('@google-cloud/storage');

    // Creates a client
    const storage = new Storage();

    async function printFileAcl() {
        /**
         * TODO(developer): Uncomment the following line before running the sample.
         */
        // const bucketName = 'Name of a bucket, e.g. my-bucket';
        // const filename = 'File to access, e.g. file.txt';

        // Gets the ACL for the file
        const [acls] = await storage
            .bucket(bucketName)
            .file(filename)
            .acl.get();

        acls.forEach(acl => {
            console.log(`${acl.role}: ${acl.entity}`);
        });
        // [END storage_print_file_acl]
    }
    printFileAcl().catch(err => console.log(err));
}

main(...process.argv.slice(2));

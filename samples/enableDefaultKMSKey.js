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

// sample-metadata
//  title: enable-default-kms-key
//  description: Enables default KMS key in the Cloud Storage
//  usage: node enableDefalutKMSKey.js

function main(bucketName, defaultKmsKeyName) {
  // [START storage_create_bucket]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function enableDefaultKMSKey() {
    // Enables a default KMS key for the bucket
    await storage.bucket(bucketName).setMetadata({
      encryption: {
        defaultKmsKeyName,
      },
    });

    console.log(
      `Default KMS key for ${bucketName} was set to ${defaultKmsKeyName}.`
    );
    // [END storage_set_bucket_default_kms_key]
  }
  enableDefaultKMSKey().catch(err => console.log(err));
}

main(...process.argv.slice(2));

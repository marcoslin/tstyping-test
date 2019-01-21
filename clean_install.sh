#!/bin/bash

for path in lib node_module yarn.lock
do
    if [ -e "./$path" ]; then rm -rf "./$path"; fi
done

yarn install

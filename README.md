# Multi Json Formatter README

This is the README for extension "Multi Json Formatter".

## Features

JSON multi fragments formatter.

Formats selected/all json fragments into text files (*.txt) or log files (*.log).

For example, string like this

<pre>
[2024-03-07 18:16:41] local.INFO: Got synchronization item to execution {"synchronization_item":{"id":504,"class_fqn":"App\\Synchronizers\\Stat\\Test\\Test\\TestClass","class_name":"TestClass"}}
</pre>

will be formatted into

<pre>
[2024-03-07 18:16:41] local.INFO: Got synchronization item to execution
{
  "synchronization_item": {
    "id": 504,
    "class_fqn": "App\\Synchronizers\\Stat\\Test\\Test\\TestClass",
    "class_name": "TestClass"
  }
}
</pre>

## Requirements

This extension has no special requirements or dependencies.

## Extension Settings

This extension has no settings.

## Known Issues

This extension has no known issues.

## Release Notes

### 1.0.0

Initial release of MultiJsonFormatter extension
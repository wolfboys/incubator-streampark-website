---
id: 'new_pmc_ember_process'
title: 'New PMC Member Process'
sidebar_position: 5
---

<!--
    Licensed to the Apache Software Foundation (ASF) under one or more
    contributor license agreements.  See the NOTICE file distributed with
    this work for additional information regarding copyright ownership.
    The ASF licenses this file to You under the Apache License, Version 2.0
    (the "License"); you may not use this file except in compliance with
    the License.  You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
-->

This guideline is based on [apache newcommitter](https://community.apache.org/newcommitter.html#new-committer-process)

## The process of new PMC member

- Call a vote in mailing `private@streampark.apache.org`

  see **PMC Member Vote Template**

- Close the vote

  see **Close Vote Template**

- Board Approval of new PMC member

  see **Board Approval of new PMC member**

- If the result is positive, invite the new PMC member

  see **PMC member Invite Template**

- If accept, then: Accept the PMC member

  see **PMC Member Accept Template**

- Notify the PMC member of completion

  see **PMC Member Done Template**

- Announce the new PMC member

  see **PMC Member Announce Template**

## Template

Note that, there are three placeholder in template should be replaced before using

- NEW_PMC_NAME
- NEW_PMC_EMAIL
- NEW_PMC_APACHE_NAME

### PMC Member Vote Template

```text
To: private@streampark.apache.org
Subject: [VOTE] New PMC member candidate: ${NEW_PMC_NAME}
```

```text
Hi StreamPark PMC,

This is a formal vote about inviting ${NEW_PMC_NAME} as our new PMC member.

${Work list}[1]

[1] https://github.com/apache/streampark/commits?author=${NEW_PMC_NAME}
```

Note that, Voting ends one week from today, i.e. [midnight UTC on YYYY-MM-DD](https://www.timeanddate.com/counters/customcounter.html?year=YYYY&month=MM&day=DD)
See voting [guidelines](https://community.apache.org/newcommitter.html)


### Close Vote Template

```text
To: private@streampark.apache.org
Subject: [RESULT] [VOTE] New PMC member: ${NEW_PMC_NAME}
```

```text
Hi StreamPark PMC,

The vote has now closed. The results are:

Binding Votes:

+1 [TOTAL BINDING +1 VOTES]
 0 [TOTAL BINDING +0/-0 VOTES]
-1 [TOTAL BINDING -1 VOTES]

The vote is ***successful/not successful***
```

### Board Approval of new PMC member Template

```text
To: board@apache.org
Cc: private@<project>.apache.org
Subject: [NOTICE] ${NEW_PMC_NAME} for StreamPark PMC member
```

```text
StreamPark proposes to invite ${NEW_PMC_NAME} to join the PMC.

The vote result is available here: https://lists.apache.org/...
```

See [newpmc](https://www.apache.org/dev/pmc.html#newpmc)

### PMC Member Invite Template

```text
To: ${NEW_PMC_EMAIL}
Cc: private@streampark.apache.org
Subject: Invitation to become StreamPark PMC member: ${NEW_PMC_NAME}
```

```text
Hello ${NEW_PMC_NAME},

The StreamPark Project Management Committee (PMC) 
hereby offers you committer privileges to the project
as well as membership in the PMC.
These privileges are offered on the understanding that
you'll use them reasonably and with common sense.
We like to work on trust rather than unnecessary constraints. 

Being a PMC member enables you to guide the direction of the project.

Being a PMC member does not require you to 
participate any more than you already do. It does 
tend to make one even more committed.  You will 
probably find that you spend more time here.

Of course, you can decline and instead remain as a 
contributor, participating as you do now.

A. This personal invitation is a chance for you to 
accept or decline in private.  Either way, please 
let us know in reply to the private@streampark.apache.org
address only.

B. If you accept, the next step is to register an iCLA:
    1. Details of the iCLA and the forms are found 
    through this link: https://www.apache.org/licenses/#clas

    2. Instructions for its completion and return to 
    the Secretary of the ASF are found at
    https://www.apache.org/licenses/#submitting

    3. When you transmit the completed iCLA, request 
    to notify the Apache StreamPark and choose a 
    unique Apache ID. Look to see if your preferred 
    ID is already taken at 
    https://people.apache.org/committer-index.html
    This will allow the Secretary to notify the PMC 
    when your iCLA has been recorded.

When recording of your iCLA is noted, you will 
receive a follow-up message with the next steps for 
establishing you as a PMC member.
```

### PMC Member Accept Template

```text
To: ${NEW_PMC_EMAIL}
Cc: private@streamparkv.apache.org
Subject: Re: invitation to become StreamPark PMC member
```

```text
Welcome. Here are the next steps in becoming a project PMC. After that
we will make an announcement to the dev@streampark.apache.org list.

You need to send a Contributor License Agreement to the ASF.
Normally you would send an Individual CLA. If you also make
contributions done in work time or using work resources,
see the Corporate CLA. Ask us if you have any issues.
https://www.apache.org/licenses/#clas.

You need to choose a preferred ASF user name and alternatives.
In order to ensure it is available you can view a list of taken IDs at
https://people.apache.org/committer-index.html

Please notify us when you have submitted the CLA and by what means 
you did so. This will enable us to monitor its progress.

We will arrange for your Apache user account when the CLA has 
been recorded.

After that is done, please make followup replies to the dev@streampark.apache.org list.
We generally discuss everything there and keep the
private@streampark.apache.org list for occasional matters which must be private.

The developer section of the website describes roles within the ASF and provides other
resources:
  https://www.apache.org/foundation/how-it-works.html
  https://www.apache.org/dev/

The incubator also has some useful information for new PMC
in incubating projects:
  https://incubator.apache.org/guides/committer.html
  https://incubator.apache.org/guides/ppmc.html

Just as before you became a PMC member, participation in any ASF community
requires adherence to the ASF Code of Conduct:
  https://www.apache.org/foundation/policies/conduct.html

Yours,
The Apache StreamPark PMC
```

### PMC Member Done Template

```text
To: private@streampark.apache.org, ${NEW_PMC_EMAIL}
Subject: account request: ${NEW_PMC_NAME}
```

```text
${NEW_PMC_EMAIL}, as you know, the ASF Infrastructure has set up your
committer account with the username '${NEW_PMC_APACHE_NAME}'.

Please follow the instructions to set up your SSH,
svn password, svn configuration, email forwarding, etc.
https://www.apache.org/dev/#committers

You have commit access to specific sections of the
ASF repository, as follows:

The general "committers" at:
  https://svn.apache.org/repos/private/committers

If you have any questions during this phase, then please
see the following resources:

Apache developer's pages: https://www.apache.org/dev/
Incubator committer guide: https://incubator.apache.org/guides/committer.html

Naturally, if you don't understand anything be sure to ask us on the dev@streampark.apache.org mailing list. 
Documentation is maintained by volunteers and hence can be out-of-date and incomplete - of course
you can now help fix that.

A PMC member will announce your election to the dev list soon.
```

### PMC Member Announce Template

```text
To: dev@streampark.apache.org
[ANNONCE] New PMC member: ${NEW_PMC_NAME}
```

```text
Hi StreamPark Community,

The Project Management Committee (PMC) for Apache StreamPark
has invited ${NEW_PMC_NAME} to become our PMC member and
we are pleased to announce that he has accepted.

### add specific details here ###

Please join me in congratulating ${NEW_PMC_NAME}!

Being a committer enables easier contribution to the
project since there is no need to go via the patch
submission process. This should enable better productivity.
A PMC member helps manage and guide the direction of the project.

Thanks,
On behalf of the Apache StreamPark PMC
```

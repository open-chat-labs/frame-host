# IFrame hosted OpenChat proof of concept

This is a proof of concept designed around the BetBase use-case. It is a site with four routes (home, dice, poker and roulette) to simulate the current design of the BetBase site.

In place of the chat window, we have an iframe hosting a single instance of OpenChat.

We make use of the [openchat-xframe](https://github.com/open-chat-labs/openchat-xframe) library to manage the communication between the host page and the instance of OpenChat running in the iframe.

The library allows us to set an initial theme and to change path which is all we need in this case.

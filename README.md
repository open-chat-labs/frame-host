# IFrame hosted OpenChat proof of concept

This is a proof of concept designed around the BetBase use-case. It is a site with four routes (home, dice, poker and roulette) to simulate the current design of the BetBase site.

In place of the chat window, we have an iframe hosting a single instance of OpenChat.

There is a small amount of code in the `frame.ts` module to manage sending and receiving messages between the host page and the OpenChat instance in the iframe.

Currently we support two messages types that can be sent to OpenChat. The first is `update_theme` which can be used to override any of the default css variables used by OpenChat so that it looks as much like the host app as possible. The second is `change_route` so that we can navigate to a route within OpenChat from the host. This is used so that when the route changes in the host app, we can load a specific channel relative to that route in the OpenChat instance.

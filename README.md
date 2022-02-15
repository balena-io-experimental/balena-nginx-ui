# balena-nginx-ui

An unused experiment for creating a UI for Balena devices.

https://forums.balena.io/t/good-starting-place-for-local-balena-device-ui/349763/17

It always seemed a little cumbersome to have to build another backend for a frontend to communicate with just to then be passed to a second backend (the supervisor). So here I used an NGINX reverse proxy to bring the Supervisor on to an open port, then used the same NGINX instance to host a UI which communicated with the supervisor on the reverse proxy port. Pros: great image size, around 15mb, Cons: security having opened the supervisor on a port, and not much room to grow. If the goal was to pursue other features like CPU usage that isn’t on the Supervisor API it would be problematic. Moreover, no means of adding a useful authentication at a later date.

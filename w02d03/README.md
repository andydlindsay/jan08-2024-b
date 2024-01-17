# W02D03 - Networking with TCP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo (chat server)

### Networking
* each machine on the network can communicate with every other machine
* Local Area Network (LAN)

### Internet Protocol
* IP address (street address)
  * IPv4 192.198.0.0 127.0.0.1
  * IPv6 2001:db8:3333:4444:5555:6666:7777:8888
* Port (Apt number)
  * identifies which app to talk to
  * 65,535 ports to choose from
    * <1000 do not use
    * 3000 - 9000 dev purposes
    * 80 http
    * 22 ssh
    * 443 https
    * 5432 postgres

### Communication
* client and server
* servers have information
* clients want information

### Transport Layer Protocol
* all communication is broken into packets
* headers
  * where is the destination
  * who is the sender
  * 1/500 2/500 495/500

### Transmission Control Protocol (TCP)
* larger header size
* three-way handshake
* lost packets are resent
* arrive in order

### User Datagram Protocol (UDP)
* smaller header size
* connectionless
* lost packets are not resent
* can arrive in any order

### Event Driven Programming
* programming against/when an event occurs
* form submission, button gets clicked, a connection is established
* pass a callback


"Name: xyz"
"Move: right"

```js
const data = 'Move: up';
if (data.includes('Move')) {
  // perform the move action
}
if (data.includes('Name')) {
  // set their name
}
```























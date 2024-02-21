# What is an IP Address?

> #### 💡 Acronym Alert!
>
> Heads up, these acronyms appear in this lesson!
>
> - **IP** stands for **Internet Protocol**
> - **DNS** stands for **Domain Name System**
> - **VPN** stands for **Virtual Private Network**

An IP Address is basically a phone number for computers connected to the internet, and every device on the net has its own. Servers that host websites included!

In `currentYear`, it's impossible to memorize phone numbers because your Contacts app ties them to names. **DNS** is the internet's Contacts app, using domain names like `boot.dev` to map to the number.

If you want to dive into the details, check out the Wikipedia articles for [IPs](https://en.wikipedia.org/wiki/IP_address) and [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) when you're done your assignment! Fair warning-- there is a ton of info there. Let's look at a real example...

## IPs in the Wild

Each time you ask **Boots**, _Purveyor of Protocols_, a question here (try it out below if you haven't yet!), you're sending a request to his server's IP address. Servers have Caller ID, meaning they get your IP as part of your request, so they know where to respond back to. Your browser receives the response, and then it's up to the website's code to handle it.

A practical use for IPs is to get a rough estimate of the computer's location. It's not exact, and can be worked around with a VPN, but it lets websites and apps customize your experience (for better or worse).

> #### ❓ What's a VPN anyway?
>
> Staying with the phone number analogy, a VPN is like Call Forwarding. It acts like a middle-man between you and the server. For example, when **Boots** gets our request while we're on VPN, it will receive the VPN's info, not ours. If your VPN is in Japan, Boots will think that's where you are.

## Find your IP

Before we jump into the assignment, here's a quick way to find your personal IP. Google has a special search, `what is my ip`, that will tell you-- [try it out](https://www.google.com/search?q=what+is+my+ip). Somewhere beyond Advertisement Forest, you should see something like this:

![image](https://github.com/cwlsn/rinse-react/assets/10063864/38e12f9f-6b10-4538-a7f2-b509dacdcd7e)

## Assignment

On Boots' travels he has no idea [where he's heading next](https://www.boot.dev/lore/prologue), but he still likes to take a break to watch his [favorite show](https://www.imdb.com/title/tt0460681/). Since you've made such great progress on your own journey, Boots wants to pay you a visit. We should make sure he can still watch his show where you live!

Using a great free tool, [IP API](https://ipapi.co/), we can get an estimate of the location of your IP by [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements). Use the IP that you looked up on Google and set `myIp` as a string on line 1.

Your task is to make sure your IP is allowed by updating the `isShowLicensedByCountryCode` object. When you run the code for the first time, you should see a log with your country code. If it's not in the object, make sure to add it. When you see `All clear!`, you've completed the task.

There's some `console.log` assistance, so when you run the code you can get a sense for the shape of the data returned.

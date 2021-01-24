---
title: "Code Review"
date: 2020-09-25 12:12:12 -0400
---

As part of our command line tool project, which finds broken URLs, we are to
reviews each others code. We needed to use GitHub for this purpose. My code
[https://github.com/badalsarkar/Blink](https://github.com/badalsarkar/Blink) was
reviewed by [eunbeek](https://github.com/eunbeek). He found an issue in my code
that it was printing some wrong output. I figured it out. It was happening due
to the difference in tab character in windows and linux terminal. I fixed the
issue [https://github.com/badalsarkar/Blink/issues/1](https://github.com/badalsarkar/Blink/issues/1). There is another issue.
The color output is not working in the windows command line. The library I used
for color output is [JColor](https://github.com/dialex/JColor). The library is
supposed to work both in Windows terminal and Linux Terminal. However, it is not
working in Windows. So, I need to find out how how the library works for Windows
terminal.

I also reviewed enubeek's code. To start with, I forked his repo and then
cloned it in my local machine. Then I followed his instruction in readme file.
However, I was not able to run the code in my machine. He developed his
application in a windows machine and used an external library called [jna](https://github.com/java-native-access/jna).
But, the library was not working in my machine. So, I filed an issue at
enubeek's repository.

Overall, the I learned how to test someone else's code in my machine and file
issues related to the code. It happened to me several times that some of the
libraries I used for my other work, did not work as expected. But I was not
comfortable enough to file an issue. But now, with this practice, I am more
comfortable than before to test the code and file an issue. Also, enubeek's
review of my code was really helpful. Because I did not test my code in windows
machine. While it was working as expected in linux machine, it broke in Windows
machine. Without enubeek's help, it would have been not possible to find this
so easily.

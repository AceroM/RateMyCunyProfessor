# RateMyCunyProfessor
![logo](https://image.ibb.co/f9m4sz/icon128.png)
Chrome extension for CunyFirst website that lets you view teacher's rate my professor profile straight from the class search menu

## features to add / bugs need to fix

* IMPORTANT: make the script persistent, so that it injects process page everytime it finds the classnames; as it is the user has to reload the page everytime

* Once it's persistent, I can inject it everytime your class is shown not just in the add class menu.

* IMPORTANT_2: As of right now I am only returning the first teacher search result from RMP, so there is a chance the teacher could be from a different school. I couldn't find a proper webscraping library for chrome API so I just used regex haha.

* Instead of setIntervals, use a mutation observer for the iFrames contents.
(can't seem to figure this out with the way that I do it)

* Add an option to style cunyfirst with themes

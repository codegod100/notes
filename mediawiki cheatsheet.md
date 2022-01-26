---
created: 2022-01-25T20:08:25 (UTC -08:00)
tags: []
source: https://www.mediawiki.org/wiki/Cheatsheet
author: 
---

# TODO
Format this page to not be so ugly. imported from https://www.mediawiki.org/wiki/Cheatsheet for reference

# Cheatsheet - MediaWiki

> ## Excerpt
> Wiki's use symbols such as asterisks, single-quotes, square-brackets and braces to represent formatting elements like making words into links to other sites or articles, or creating tables for layout and dividing the text into headings. This kind of text markup used in the MediaWiki (Wikipedia) project is called wikitext.

---
Wiki's use symbols such as asterisks, single-quotes, square-brackets and braces to represent formatting elements like making words into links to other sites or articles, or creating tables for layout and dividing the text into headings. This kind of text markup used in the MediaWiki (Wikipedia) project is called _wikitext_.

Below is a table of the most commonly used wikitext formatting, the middle column is what you type into the article in "edit mode" (after clicking the edit link at the top of the page), and the right-hand column shows what the result would be when viewing the article normally. For more detailed information about editing and wikitext, see [Help:Wikitext](https://meta.wikimedia.org/wiki/Help:Wikitext).

**Description**

**You type**

**You get**

Applies anywhere

Italicise text

`''italic''`

_italic_

 

Bold text

`'''bold'''`

**bold**

 

Bold and italic

`'''''bold & italic'''''`

_**bold & italic**_

 

Internal link  

(within this wiki)

Internal link  
(to a category)

Interwiki Link  
(to partner wiki)

`[[name of page]]`  
`[[name of page|display text]]`

`[[:Category:name of category]]`

`[[w:name of article]]`  
`[[wiki:name of article]]`  
`[[wiki:name of article|display text]]`

[name of page](https://www.mediawiki.org/w/index.php?title=Name_of_page&action=edit&redlink=1 "Name of page (page does not exist)")  
[display text](https://www.mediawiki.org/w/index.php?title=Name_of_page&action=edit&redlink=1 "Name of page (page does not exist)")

[Category:name of category](https://www.mediawiki.org/w/index.php?title=Category:Name_of_category&action=edit&redlink=1 "Category:Name of category (page does not exist)")

[w:name of article](https://en.wikipedia.org/wiki/name_of_article "w:name of article")  
[wiki:name of article](https://www.mediawiki.org/w/index.php?title=Wiki:name_of_article&action=edit&redlink=1 "Wiki:name of article (page does not exist)")  
[display text](https://www.mediawiki.org/w/index.php?title=Wiki:name_of_article&action=edit&redlink=1 "Wiki:name of article (page does not exist)")

_**Note:** red links mean_  
_the page doesn't exist yet_

 

External link

(to other websites)

`[http://www.example.com]`  
`[http://www.example.com display text]`  
`http://www.example.com`  
`[mailto:bob@yahoo.com Bob's email]`

[\[1\]](http://www.example.com/)  
[display text](http://www.example.com/)  
[http://www.example.com](http://www.example.com/)  
[Bob's email](mailto:bob@yahoo.com)

 

Redirect

`#redirect [[Target page]]`

1\. redirect [Target page](https://www.mediawiki.org/w/index.php?title=Target_page&action=edit&redlink=1 "Target page (page does not exist)")

 

Signature

`~~~`  
`~~~~`  
`~~~~~`  

[J.Doe](https://www.mediawiki.org/w/index.php?title=User:J.Doe&action=edit&redlink=1 "User:J.Doe (page does not exist)")  
[J.Doe](https://www.mediawiki.org/w/index.php?title=User:J.Doe&action=edit&redlink=1 "User:J.Doe (page does not exist)") 04:08, 26 January 2022  
04:08, 26 January 2022  

 

Escape wiki markup

`with ''markup''`  
`<nowiki>without ''markup''</nowiki>`

with _markup_  
without ''markup''

Applies only at the beginning of the line

Headings

of different sizes

`== level 1 ==`  
`=== level 2 ===`  
`==== level 3 ====`  
`===== level 4 =====`

_**Tip:** put \_\_NOTOC\_\_ in an article_  
_to remove its table-of-contents_

## Level 1

### Level 2

#### Level 3

##### Level 4

 

Outline Numbered  
Headings

`# one`  
`# two`  
`## two point one`  
`# three`

## 1\. one

### 2\. two

#### 2.1 two point one

### 3\. three

 

Bullet list

`* one`  
`* two`  
`** two point one`  
`* three`

-   one
-   two
    -   two point one
-   three

 

Definition list

`;Definition`  
`:item 1`  
`:item 2`

Definition

item 1

item 2

 

Thumbnail image

\[\[File:Example.jpg|thumb|Caption text\]\]

[![](https://upload.wikimedia.org/wikipedia/mediawiki/thumb/a/a9/Example.jpg/220px-Example.jpg)](https://www.mediawiki.org/wiki/File:Example.jpg)

Caption text

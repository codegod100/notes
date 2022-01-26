Url(Phrase)
{
Replaced := StrReplace(Phrase," ","-")
return % "https://anagora.org/"  Replaced
}

Link()
{
InputBox, Wikilink, "Wikilink", "Enter your phrase to wikilink"
Display := Url(Wikilink)
return % "[[["  Wikilink  "](" Display ")]]"
}

^j::
SendInput, % Link()
return

^l::
InputBox, Wikilink, "Wikilink", "Enter your phrase to wikilink"
url := Url(Wikilink)
Run, chrome.exe %url%
return

^+g::
InputBox, Message, "Git", "Enter your Git commit message"
SendInput, % "git add . && git commit -m '" Message "' && git push gitlab"
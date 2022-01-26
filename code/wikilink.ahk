Link()
{
InputBox, Wikilink, "wikilink"
Replaced := StrReplace(Wikilink," ","-")
return % "[[["  Wikilink  "](https://anagora.org/"  Replaced ")]]"
}

^j::
Foo := Link()
SendInput, %Foo%

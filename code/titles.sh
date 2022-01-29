while IFS= read -r url
do
   printf "%s " "$url"
   curl -sL "$url" | # fetch the page
       pup 'head title:first-of-type text{}' # get the text of the first title tag in head
done < ../links.txt

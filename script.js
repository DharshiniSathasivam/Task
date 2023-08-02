// function TittleCaps(a)
// {
// a=a.toLowerCase().split(' ');
// for(let i=0;i<a.length;i++){
//     a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1);
// }
// return a.join(' ');
// }
// console.log(TittleCaps(""))
// ------------------------------------------------------------------

function isPalindrome(text)
{
    return text=text.slice().split('').reverse().join('');
}
console.log(isPalindrome("hello"));
console.log(isPalindrome("level"));

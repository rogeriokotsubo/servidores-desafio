export default function checkEmail(_email) {
    const _user = _email.substring(0, _email.indexOf("@"));
    const _domain = _email.substring(_email.indexOf("@")+ 1, _email.length);
    
    if ((_user.length >=1) &&
        (_domain.length >=3) &&
        (_user.search("@")==-1) &&
        (_domain.search("@")==-1) &&
        (_user.search(" ")==-1) &&
        (_domain.search(" ")==-1) &&
        (_domain.search(".")!=-1) &&
        (_domain.indexOf(".") >=1)&&
        (_domain.lastIndexOf(".") < _domain.length - 1)) {
        return true;
    }else{
        return false;
    }
}
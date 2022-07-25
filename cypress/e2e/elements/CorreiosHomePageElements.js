class CorreiosHomePageElements {

    closeCookiesButton = () => {
        return 'a[id=btnCookie]'
    }

    websiteHelperImage = () => {
        return 'carol-corpo-img'
    }

    websiteHelperCloseButton = () => { 
        return 'carol-fecha'
    }

    searchZIPCodeBar = () => { 
        return 'input#relaxation'
    }
  
    zipCodeSearchButton = () => { 
        return 'input#relaxation + button'
    }

    zipCodeSeachForm = () => {
        return 'article#content > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > form'
    }

}
  
export default CorreiosHomePageElements;

"use strict"
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
  

  const titleClickHandler = function(event){
    console.log('Link was clicked!');
    console.log('Event object:', event);
    event.preventDefault();
    const clickedElement = this;
    
    /*[DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles .active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
      
    }
    /*[DONE] add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);
      
       clickedElement.classList.add('active');
      
       
    /*[Done] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}
console.log(activeArticles)
    /* get 'href' attribute from the clicked link */
    
    const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector)
    /* find the correct article using the selector (value of 'href' attribute) */
   const targetArticle = document.querySelector(articleSelector)
   console.log(targetArticle)
    /* add class 'active' to the correct article */
  targetArticle.classList.add('active')
 
  }

    const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }




  {
    
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks() {
/* Remove contents of titleList */

function clearMessages() {
document.getElementById('messages').innerHTML = '';
}

/* For each article */
const articles = document.querySelectorAll(optArticleSelector);
let html = '';

const titleList = document.querySelector(optTitleListSelector);
for (let article of articles) {
clearMessages();
document.getElementById('messages').innerHTML = '';

/* Get the article id */
const articleId = article.getAttribute('id');


/* Find the title element */
const articleTitle = article.querySelector(optTitleSelector).innerHTML;


/* Get the title from the title element */
articleTitleElement.innerHTML = '';

/* Create HTML of the link */
const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

/* Insert link into titleList */
html = html + linkHTML;
}

titleList.innerHTML= html;
console.log(html)
}

generateTitleLinks();
}
  
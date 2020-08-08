---
layout: default
title: Archive
---

<div class="pop-up">
    <span>Chapters</span>
</div>

<div class="simple-list">
    <ul> 
        {% for chapter in site.archive %}
            <li class="glitch" data-text="{{ chapter.title }}"><a href="{{ site.baseurl }}{{ chapter.url }}">{{ chapter.title }}</a></li>
        {% endfor %}
    </ul>
</div>

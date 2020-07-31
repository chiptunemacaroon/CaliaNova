---
layout: default
title: Chapter 1
chapter_folder: chapter_1
---

{% if page.chapter_folder %}
    {% include comic.html chapter_folder=page.chapter_folder %}
{% endif %}
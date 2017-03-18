from django.conf.urls import url, include
from django.views.generic.base import RedirectView
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^$', RedirectView.as_view(url='static/index.html'),
                                    name='index'),
]

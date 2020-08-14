from django.urls import path
from .views import ArticleView

article1 = ArticleView.as_view({'get': 'list', 'post': 'create'})
article2 = ArticleView.as_view({
    'get': 'retrieve',
    'delete': 'destroy',
    'put': 'update',
    'patch': 'partial_update'
})

urlpatterns = [
    path('articles/', article1),
    path('articles/<int:pk>', article2),
]
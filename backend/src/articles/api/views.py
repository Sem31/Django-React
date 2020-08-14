from .serializers import ArticleSerializer
from articles.models import Article
from rest_framework import viewsets


class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
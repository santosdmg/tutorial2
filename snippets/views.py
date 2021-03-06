from snippets.models import Snippet
from snippets.serializers import SnippetSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from snippets.serializers import UserSerializer
from rest_framework import permissions
from snippets.permissions import IsOwnerOrReadOnly
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import renderers
from rest_framework import viewsets
from rest_framework.decorators import detail_route

class SnippetViewSet(viewsets.ModelViewSet):
    """
    Este viewset automaticamente proporciona las acciones
    de 'listar', 'crear','aztualizar' y 'eliminar'.
    Adicionalmente proporciona la accion de 'highlight'.
    """
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)

    @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        snippet = self.get_object()
        return Response(snippet.highlighted)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


@api_view(['GET'])
def api_root(request, format = None):
    return Response({
        'users': reverse('user-list', request = request, format = format),
        'snippets': reverse('snippet-list', request = request, format=format)
    })


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Este viewsets automaticamente proporciona las acciones de 'listar' y 'detallar'
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

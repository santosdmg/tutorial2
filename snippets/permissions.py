from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    EL permiso personalizado solo permite
    a los propietarios de un objeto editarlo
    """
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        #los permisos de escritura solo se permite al propietario del snippet
        return obj.owner == request.user

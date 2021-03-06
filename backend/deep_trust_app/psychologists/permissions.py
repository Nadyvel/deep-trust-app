from rest_framework import permissions


class IsOwnerOfProfileOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True
        # requesting user must be .
        if request.user == obj.user:
            return True
        else:
            return False


class IsUserCurrentLoggedIn(permissions.BasePermission):
    def has_permission(self, request, view):
        if bool(request.user and request.user.is_user):
            return True

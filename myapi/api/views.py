from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from .models import Todo
from .serializers import TodoSerializer

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    # Custom action for updating the status of a todo item
    @action(detail=True, methods=['patch'])
    def update_status(self, request, pk=None):
        todo = self.get_object()
        if 'status' in request.data:
            todo.status = request.data['status']
            todo.save()
            return Response({'status': 'status updated'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)
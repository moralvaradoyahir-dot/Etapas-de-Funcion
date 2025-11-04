# Lista para almacenar las notas (puedes usar números enteros o decimales)
notas = []

# Inicializamos la variable que guardará la opción elegida por el usuario
opcion = None

# Definición de una función para mostrar el menú
def mostrar_menu():
    """Muestra las opciones del menú principal."""
    print("\n--- MENÚ PRINCIPAL ---")
    print("1. Agregar una nota")
    print("2. Mostrar todas las notas")
    print("3. Calcular promedio, mayor y menor")
    print("4. Terminar programa")

# Simulación del bucle do-while en Python
while True:
    mostrar_menu()
    
    try:
        opcion = int(input("Seleccione una opción (1-4): "))
    except ValueError:
        print("🛑 ¡Opción inválida! Por favor, ingrese un número del 1 al 4.")
        continue 
    
    if opcion == 1:
        # --- Agregar una nota ---
        try:
            nota = float(input("Ingrese la nota a agregar: "))
            notas.append(nota)
            print(f"✅ Nota {nota} agregada correctamente.")
        except ValueError:
            print("🛑 ¡Entrada inválida! Debe ingresar un número para la nota.")

    elif opcion == 2:
        # --- Mostrar todas las notas ---
        if notas:
            print("\n--- LISTA DE NOTAS ---")
            for i, nota in enumerate(notas):
                print(f"Nota #{i+1}: {nota}")
        else:
            print("ℹ Aún no hay notas registradas.")

    elif opcion == 3:
        # --- Calcular promedio, mayor y menor ---
        if notas:
            promedio = sum(notas) / len(notas)
            mayor = max(notas)
            menor = min(notas)
            
            print("\n--- RESULTADOS ---")
            print(f"📊 Promedio de notas: {promedio:.2f}")
            print(f"⭐ Nota más alta: {mayor}")
            print(f"⬇ Nota más baja: {menor}")
        else:
            print("ℹ No hay notas registradas para calcular estadísticas.")

    elif opcion == 4:
        # --- Terminar programa ---
        print("👋 Programa finalizado. ¡Hasta luego!")
        break

    else:
        print("🛑 Opción fuera de rango. Elija un número del 1 al 4.")

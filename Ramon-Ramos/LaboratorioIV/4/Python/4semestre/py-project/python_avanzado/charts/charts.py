import matplotlib.pyplot as pit

def generate_pie_chart(): 
    labels = ['A', 'B', 'C']
    values = [200, 34, 120]
    fig, ax = pit.subplots()
    ax.pie(values, labels=labels)
    pit.savefig('pie.png')

    pit.close()
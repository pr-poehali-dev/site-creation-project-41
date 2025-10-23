import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface Property {
  id: number;
  name: string;
  area: number;
  price: number;
  image: string;
  type: string;
}

const properties: Property[] = [
  {
    id: 1,
    name: 'Сдача помещения',
    area: 40,
    price: 32000,
    image: 'https://cdn.poehali.dev/files/782fc485-702a-46dd-a4d6-c19a337a833d.jpg',
    type: 'Склад'
  },
  {
    id: 2,
    name: 'Сдача помещения',
    area: 3000,
    price: 3500,
    image: 'https://cdn.poehali.dev/files/782fc485-702a-46dd-a4d6-c19a337a833d.jpg',
    type: 'Производство'
  },
  {
    id: 3,
    name: 'Сдача помещения',
    area: 7500,
    price: 7000,
    image: 'https://cdn.poehali.dev/files/782fc485-702a-46dd-a4d6-c19a337a833d.jpg',
    type: 'Логистика'
  },
  {
    id: 4,
    name: 'Сдача помещения',
    area: 2000,
    price: 2500,
    image: 'https://cdn.poehali.dev/files/782fc485-702a-46dd-a4d6-c19a337a833d.jpg',
    type: 'Склад'
  },
  {
    id: 5,
    name: 'Сдача помещения',
    area: 10000,
    price: 9500,
    image: 'https://cdn.poehali.dev/files/782fc485-702a-46dd-a4d6-c19a337a833d.jpg',
    type: 'Производство'
  },
  {
    id: 6,
    name: 'Сдача помещения',
    area: 4000,
    price: 4200,
    image: 'https://cdn.poehali.dev/files/782fc485-702a-46dd-a4d6-c19a337a833d.jpg',
    type: 'Склад'
  }
];

const Index = () => {
  const [areaRange, setAreaRange] = useState([0, 10000]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = properties.filter(property => {
    const matchesArea = property.area >= areaRange[0] && property.area <= areaRange[1];
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesArea && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">АРЕНДА ПОМЕЩЕНИЙ</h1>
          <div className="flex gap-6">
            <a href="#catalog" className="hover:text-accent transition-colors">Каталог</a>
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/files/782fc485-702a-46dd-a4d6-c19a337a833d.jpg" 
            alt="Промышленные помещения"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Коммерческая недвижимость
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in">
            Складские и производственные помещения для вашего бизнеса
          </p>
          <Button size="lg" variant="secondary" className="animate-scale-in">
            Смотреть каталог
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Каталог помещений</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Card className="md:col-span-4 p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Поиск</label>
                  <Input 
                    placeholder="Название или тип помещения"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Площадь: {areaRange[0]} - {areaRange[1]} м²
                  </label>
                  <Slider
                    min={0}
                    max={10000}
                    step={100}
                    value={areaRange}
                    onValueChange={setAreaRange}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Цена: ${priceRange[0]} - ${priceRange[1]}/мес
                  </label>
                  <Slider
                    min={0}
                    max={10000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover-scale transition-all">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Building2" size={16} />
                    <span>{property.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{property.name}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Maximize2" size={16} />
                        Площадь
                      </span>
                      <span className="font-medium">{property.area} м²</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="DollarSign" size={16} />
                        Цена
                      </span>
                      <span className="font-medium">{property.price} ₽/мес</span>
                    </div>
                  </div>
                  <Button className="w-full">Связаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                Помещения не найдены. Попробуйте изменить фильтры.
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-scale transition-all">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Key" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Аренда помещений</h3>
              <p className="text-muted-foreground">
                Гибкие условия аренды под любые задачи вашего бизнеса
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-scale transition-all">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Техническое обслуживание</h3>
              <p className="text-muted-foreground">
                Полный спектр услуг по поддержанию объектов в рабочем состоянии
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-scale transition-all">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Консультации</h3>
              <p className="text-muted-foreground">
                Экспертная помощь в выборе оптимального помещения
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Готовы обсудить аренду помещения? Наши специалисты ответят на все ваши вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="gap-2">
              <Icon name="Phone" size={20} />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="secondary" className="gap-2">
              <Icon name="Mail" size={20} />
              info@rental.ru
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 bg-muted">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Аренда промышленных помещений. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
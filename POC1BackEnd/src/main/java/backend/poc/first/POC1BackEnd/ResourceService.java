package backend.poc.first.POC1BackEnd;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResourceService 
{
	@Autowired// repository,service,bean,component,controller
	ResourceRepository repo;
	
	public Resource create(Resource resource)
	{
		return repo.save(resource);
	}
	
	public List<Resource> list()
	{
		return (List<Resource>)repo.findAll();
	}
	
	public Optional<Resource> read(int week)
	{
		return repo.findById(week);
	}
}
